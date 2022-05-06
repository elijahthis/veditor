import { useState } from "react";

export const useModal = () =>{
    const [openModal, setOpenModal] = useState(false);
    const [modalChild, setModalChild] = useState<any | null>(null)
    
    return {openModal, setOpenModal, modalChild, setModalChild} 
}