import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets all vendors per event
  getVendors: function(event) {
    return axios.get("/api/" + event + "/vendors");
  },
  // Gets all vendors per event
  getVendorInfo: function(vendor) {
    return axios.get("/api/" + vendor + "/info");
  },
  // Get menu
  getMenu: function(vendor) {
    return axios.get("/api/" + vendor + "/menu");
  },
  // Update menu
  updateMenu: function(vendor) {
    return axios.get("/api/" + vendor + "/menu");
  },
  // Create menu
  createMenu: function(vendor) {
    return axios.get("/api/" + vendor + "/menu");
  },
  // Deletes menu
  deleteMenu: function(vendor) {
    return axios.delete("/api/" + vendor + "/menu");
  },
  // Get orders
  getOrders: function(vendor) {
    return axios.get("/api/" + vendor + "/orders");
  },
  // Create orders
  createOrder: function(vendor) {
    return axios.get("/api/" + vendor + "/orders");
  },
  // Update an order
  updateOrder: function(vendor, id) {
    return axios.get("/api/" + vendor + "/orders" + id);
  }
};