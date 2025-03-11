//@ts-ignore
// import React from "react";
// import { useState } from "react";
// let avatar = "";
// const [fullName, setFullname] = useState("");
// const [email, setEmail] = useState("");
// const [githubUsername, setGithubUsername] = useState("");
// const [selectedFile, setSelectedFile] = useState("");
// const [selectedName, setSelectedName] = useState("");
// const [showTicket, setShowTicket] = useState(false);
// const [showForm, setShowForm] = useState(true);
// const handleFileUpload = (event: any) => {
//   const file = event.target.files[0];
//   if (!file) return;
//   if (file.size > 500000) {
//     setSelectedFile(file);
//     setSelectedName(file.name);
//     alert("File size must be less than 500KB");
//     return;
//   }
//   const reader = new FileReader();
//   reader.onload = (e: any) => {
//     avatar = e.target.result;
//   };
//   reader.readAsDataURL(file);
// };
// const submitForm = (e: any) => {
//   e.preventDefault();
//   if (!fullName || !email || !githubUsername) {
//     alert("Please fill in all fields");
//     return;
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     alert("Please enter a valid email address");
//     return;
//   }

//   setShowTicket(true);
//   setShowForm(false);
// };
// const Form = () => {
//   return (
//     <form action="" onSubmit={submitForm}>
//       <div className="">
//         <label htmlFor="fileUpload" className="text-white pl-6 md:pl-0">
//           Upload Avatar
//         </label>
//         <br />
//         <div className="relative px-6 md:px-0">
//           <input
//             type="file"
//             name={selectedFile}
//             id=""
//             accept="image/png, image/jpeg"
//             onChange={handleFileUpload}
//             className="border border-Neutral-300 border-dashed rounded-md h-24 w-full md:w-96 mt-2 cursor-pointer "
//           />

//           <div className="absolute top-5 inset-x-[158px] md:inset-x-[172px] bg-Neutral-700 border border-Neutral-500 rounded-lg h-10 w-10">
//             <img
//               src="/images/icon-upload.svg"
//               alt="upload-icon"
//               className="flex justify-center items-center h-10 w-10 px-2 cursor-pointer"
//             />
//           </div>
//           <p className="text-Neutral-0 absolute bottom-2 inset-x-14 md:inset-x-20 text-center text-sm cursor-pointer">
//             {selectedName || "Drag and drop or click to upload"}
//           </p>
//         </div>
//         <div className="flex space-x-3 items-center pt-2 px-6 md:px-0">
//           <img src="/images/icon-info.svg" alt="info-icon" />
//           <p className="text-Neutral-300 text-xs ">
//             Upload your photo (JPG or PNG, max size: 500KB)
//           </p>
//         </div>
//       </div>
//       <div className="pt-3 px-6 md:px-0 ">
//         <label htmlFor="fullname" className="text-Neutral-0 ">
//           Fullname
//         </label>{" "}
//         <br />
//         <input
//           type="text"
//           name="fullname"
//           id=""
//           value={fullName}
//           onChange={(e: any) => setFullname(e.target.value)}
//           className="border border-Neutral-300 rounded-md h-10 w-full md:w-96 mt-2 cursor-pointer"
//         />
//       </div>
//       <div className="pt-3 px-6 md:px-0 ">
//         <label htmlFor="emailAddress" className="text-Neutral-0 ">
//           Email Address
//         </label>{" "}
//         <br />
//         <input
//           type="email"
//           name=""
//           id=""
//           value={email}
//           onChange={(e: any) => setEmail(e.target.value)}
//           placeholder="exampleemail1.com"
//           className=" placeholder-Neutral-300 border border-Neutral-300 rounded-md h-10 w-full md:w-96 mt-2 cursor-pointer placeholder:pl-3"
//         />
//       </div>
//       <div className="pt-3 px-6 md:px-0 ">
//         <label htmlFor="githubUser" className="text-Neutral-0  ">
//           GitHub Username
//         </label>
//         <br />
//         <input
//           type="text"
//           name="githubUser"
//           id=""
//           value={githubUsername}
//           onChange={(e: any) => setGithubUsername(e.target.value)}
//           placeholder="@yourusername"
//           className=" placeholder-Neutral-300 border border-Neutral-300 rounded-md h-10 w-full md:w-96 mt-2 cursor-pointer placeholder:pl-3"
//         />
//       </div>
//       <div className="pt-4 px-6 md:px-0 ">
//         <button className=" absolute z-20 bg-Orange-700 text-Neutral-900 text-center h-10 w-[86%] md:w-96 rounded-md font-bold pointer-events-none ">
//           Generate your ticket
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Form;
