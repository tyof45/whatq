import axios from "axios";

export default {
    //create a vendor
    createVendor: function() {
        return axios.post("/api/vendor");
      },
    //get all vendors
    getVendors: function() {
        return axios.get("/api/vendor");
      }, 
    //get vendor by ID
    findVendor: function() {
        return axios.get("/api/vendor/:id");
      },
    //update vendor by ID
    updateVendor: function() {
        return axios.put("/api/vendor/:id");
      },
    //delete vendor by ID
    removeVendor: function() {
        return axios.delete("/api/vendor/:id");
      }
};