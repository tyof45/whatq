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
  updateMenu(id, body) {
    return axios.put('/api/vendor/' + id + '/menus', body);
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
  getVendorsFromEvent(body) {
    let data = {ids: body};
    console.log(data);
    return axios.post('/api/events/asdf/vendors', data);
  },
  joinEvent (vendorId, body) {
    console.log(body)
    return axios.put('/api/events/' + vendorId + '/join', body)
  },
  createOrder (id, body) {
    return axios.post('/api/vendors/event/' + id + '/order', body)
  }
}
