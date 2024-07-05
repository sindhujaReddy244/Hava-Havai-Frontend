import React, { useContext, useState } from "react";
import { context } from "../reactContext/ContextProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { URL } from "../url/url";

const useDeleteData = () => {
  const [loadDelete, setLoadDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const { details, setDetails, airports, setAirports } = useContext(context);

  const deleteData = async (id) => {
    try {
      if (id) {
        setDeleteId(id);
        setLoadDelete(true);
        const res = await axios.get(`${URL}/airport/${id}`);
        setLoadDelete(false);
        toast.success("Airport deleted successfully 🥳");
        setAirports(res?.data);
      }
    } catch (error) {
      setLoadDelete(false);
      toast.error(error.message);
    }
  };
  console.log(deleteId);
  return { deleteData, loadDelete, deleteId };
};

export default useDeleteData;
