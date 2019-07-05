import axios from 'axios';

export default {
  // create a vendor
  createVendor() {
    return axios.post('/api/vendor');
  },
  // get all vendors
  getVendors() {
    return axios.get('/api/vendor');
  },
  // get vendor by ID
  findVendor(id) {
    return axios.get('/api/vendor/' + id);
  },
  // update vendor by ID
  updateVendor() {
    return axios.put('/api/vendor/:id');
  },
  // delete vendor by ID
  removeVendor() {
    return axios.delete('/api/vendor/:id');
  },
  // get menus
  getMenus() {
    return axios.get('/api/vendor/:id/menus');
  },
  // update menus
  updateMenu() {
    return axios.put('/api/vendor/:id/menus');
  },
  // get menus
  deleteMenu() {
    return axios.delete('/api/vendor/:id/menus');
  },
  // get items
  getItems() {
    return axios.get('/api/vendor/:id/:menus/items');
  },
  // update menus
  updateItem() {
    return axios.put('/api/vendor/:id/:title/items');
  },
  // delete menu
  deleteItem() {
    return axios.delete('/api/vendor/:id/:menutitle/items');
  },
  // get all events
  getEvents() {
    return axios.get('/api/events/all');
  },
  getVendorsFromEvent(id) {
    return axios.get('/api/events/' + id + '/vendors')
  }
};
