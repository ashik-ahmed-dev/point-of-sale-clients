<template>
  <div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="active">
              <nuxt-link to="/">
                <img src="~assets/img/icons/dashboard.svg" alt="img">
                <span> Dashboard</span>
              </nuxt-link>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);">
                <img src="~assets/img/icons/product.svg" alt="img">
                <span> Product</span>
                <span class="menu-arrow"></span>
              </a>
              <ul>
                <li>
                  <a href="productlist.html">Product List</a>
                </li>
                <li>
                  <a href="addproduct.html">Add Product</a>
                </li>
                <li>
                  <a href="categorylist.html">Category List</a>
                </li>
                <li>
                  <a href="addcategory.html">Add Category</a>
                </li>
                <li>
                  <a href="subcategorylist.html">Sub Category List</a>
                </li>
                <li>
                  <a href="subaddcategory.html">Add Sub Category</a>
                </li>
                <li>
                  <a href="brandlist.html">Brand List</a>
                </li>
                <li>
                  <a href="addbrand.html">Add Brand</a>
                </li>
                <li>
                  <a href="importproduct.html">Import Products</a>
                </li>
                <li>
                  <a href="barcode.html">Print Barcode <i class="fa-solid fa-phone"></i></a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>
