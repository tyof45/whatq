import axios from "axios";

export default {
  //create a vendor
    createVendor: function() {
        return axios.post("/api/vendor");
      },
    getVendors: function() {
        return axios.get("/api/vendor");
      },  
};