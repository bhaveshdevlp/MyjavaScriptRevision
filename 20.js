// //  // dry consept do not repeat
// // // let i=0
// // // while(i<=9)
// // // {
// // //     console.log(i)
// // //     i++
// // // }
// // const complaints=[
// //     {id:1, category:"billing",description:"Incorrect charge on bill"},
// //     {id:2, category:"technical",description:"internet service not working"},
// //     {id:3, category:"billing",description:"Billing statement  not received"},
// //     {id:4, category:"technical",description:"Tv service not working"},
// //     {id:4, category:"technical",description:"Unresolved issue with previous complaint"}
// // ];

// // let currentComplaint=0
// // while(currentComplaint<complaints.length)
// // {
// //     const complaint=complaints[currentComplaint];
// //     console.log(` handling complaint ${complaint.id}: ${complaint.description}`)
// //     let resolved=false
// //     while(!resolved)
// //     {
// //         const response=prompt("how would you like to resolve this complaint")
// //         if(response==='refund'&& complaint.category==='billing'){
// //         console.log("refunding costumer for incorrect charge on billing")
// //         resolved=true;
// //         }
// //         else if(response==='reboot'&& complaint.category==='technical'){
// //         console.log("walking customer through rebooting internet router")
// //         resolved=true;
// //         }
// //         else if(response==='mail'&& complaint.category==='billing'){
// //         console.log(" sending customer a new billing statement")
// //         resolved=true;
// //         }
// //         else if(response==='reboot'&& complaint.category==='technical'){
// //         console.log(" walking costumer through rebooting TV set-top box.")
// //         resolved=true;
// //         }
// //         else if(response==='escalete'){
// //         console.log(" elecalating complaint to supervisor")
// //         currentComplaint++;
// //         resolved=true;
// //         }
// //         else{
// //             console.log("sorry, that response doesn't resoved the complaint. ")
// //         }
// //     }
// //     currentComplaint++
// // }
// // console.log("all complaint are have been resolved Thank you for calling Us")



// let complaints = [
//     { id: 1, category: "billing", description: "I was charged twice for my last payment" },
//     { id: 2, category: "technical", description: "My internet connection is not working" },
//     { id: 3, category: "technical", description: "I can't access my email" },
//     { id: 4, category: "billing", description: "I didn't receive my bill this month" }
//   ];
  
//   let currentComplaint = 0;
  
//   while (currentComplaint < complaints.length) {
//     let complaint = complaints[currentComplaint];
//     console.log(`Complaint ${complaint.id}: ${complaint.description}`);
  
//     let resolved = false;
  
//     while (!resolved) {
//       let response = prompt(`Please choose a response for the ${complaint.category} complaint:\n- refund\n- mail\n- reboot\n- escalate`);
      
//       if (complaint.category === "billing") {
//         if (response === "refund") {
//           console.log("Customer will be refunded");
//           resolved = true;
//         } else if (response === "mail") {
//           console.log("New billing statement will be sent to customer");
//           resolved = true;
//         }
//       } else if (complaint.category === "technical") {
//         if (response === "reboot") {
//           console.log("Customer will be walked through the process of rebooting their device");
//           resolved = true;
//         } else if (response === "escalate") {
//           console.log("Complaint will be escalated to a supervisor");
//           currentComplaint++;
//           resolved = true;
//         }
//       }
  
//       if (!resolved) {
//         console.log("Response does not resolve the complaint. Please try again.");
//         resolved = false;
//       }
//     }
  
//     currentComplaint++;
//   }
  
//   console.log("Call center is now closed.");
  


while(true){
let num=+prompt("enter you number")

    if(num%2==0){
    console.log(" not prime")

}
else{
    console.log("prime")
}
if (num%2!==0)
{
    break;
}
}
