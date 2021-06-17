import "bootstrap/dist/css/bootstrap.min.css";
// import firebase from "firebase/app"
import { Button } from 'react-bootstrap';
import firebase from "firebase/app"

function SendOrderToKitchen({orderId , orderEntries}) {
    return (
        <div>
            <Button onClick = {sendOrder(orderId , orderEntries)} >Enviar a Cocina</Button>
        </div>
    )
}

export default SendOrderToKitchen;



const sendOrder = (orderId , orderEntries) => {
    return () =>{
        const db = firebase.firestore();
        var sendingOrder = db.collection("orders").doc(orderId);
        // Set the "capital" field of the city 'DC'
        return sendingOrder.update({
          Products: orderEntries,
        })
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
    }

  } 
  
