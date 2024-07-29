class InventoryItemsController < ApplicationController
  def index
    @inventory_items = InventoryItem.all
  end

  def edit
    @inventory_item = InventoryItem.find(params[:id])
  end

  def update
    @inventory_item = InventoryItem.find(params[:id])
    if @inventory_item.update(inventory_item_params)
      ActionCable.server.broadcast "inventory_channel", {
        id: @inventory_item.id,
        quantity: @inventory_item.quantity
      }
      respond_to do |format|
        format.html { redirect_to inventory_items_path }
        format.turbo_stream
      end
    else
      render :edit
    end
  end

  private

  def inventory_item_params
    params.require(:inventory_item).permit(:quantity)
  end
end
