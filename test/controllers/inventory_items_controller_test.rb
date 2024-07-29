require "test_helper"

class InventoryItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get inventory_items_index_url
    assert_response :success
  end

  test "should get edit" do
    get inventory_items_edit_url
    assert_response :success
  end

  test "should get update" do
    get inventory_items_update_url
    assert_response :success
  end
end
