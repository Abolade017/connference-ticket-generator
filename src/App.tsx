// import { useState } from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [showTicket, setShowTicket] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    if (!file) return;
    if (file.size > 500000) {
      setSelectedFile(file);
      setSelectedName(file.name);
      alert("File size must be less than 500KB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFile(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };
  const submitForm = (e: any) => {
    e.preventDefault();
    if (!fullName || !email || !githubUsername) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    setShowTicket(true);
    setShowForm(false);
    alert("success");
  };
  return (
    <>
      <div className="">
        <img
          src="/images/pattern-squiggly-line-top.svg"
          alt="top-line"
          className="top-line absolute z-10 md:top-0 top-8 right-0  md:h-auto md:w-auto  h-10 w-20"
        />
        <img
          src="/images/pattern-squiggly-line-bottom-desktop.svg"
          alt="bottom-line"
          className="bottom-line-desktop max-sm:hidden md:absolute left-0 h-auto bottom-0 object-cover"
        />
        <img
          src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt="bottom-line"
          className="bottom-line-mobile max-sm:absolute md:hidden left-0 -bottom-28 md:bottom-0 h-52 w-64 md:h-full md:w-full z-10"
        />
      </div>
      <img
        src="/images/pattern-lines.svg"
        alt="line-pattern"
        className="absolute z-10 w-full px-8 "
      />
      <img
        src="/images/pattern-circle.svg"
        alt="pattern circle"
        className={
          showTicket
            ? "hidden md:absolute z-20 bottom-72 h-48 w-48 right-[420px] "
            : "hidden"
        }
      />
      <div>
        <div className="flex justify-center items-center">
          <div className="flex space-x-2 md:space-x-4  items-center my-10">
            <div className="">
              <img
                src="/images/logo-mark.svg"
                alt="logo"
                className=" h-[20px] md:h-full w-full"
              />
            </div>
            <div>
              <h1 className="font-700 text-Inconsolata text-white text-xl md:text-2xl">
                coding conf
              </h1>
            </div>
          </div>
        </div>{" "}
        <div
          className={
            showForm ? "absolute z-30 inset-x-0 md:inset-x-48" : "hidden"
          }
        >
          <h2 className="text-white flex justify-center text-center text-2xl md:text-5xl font-bold md:font-800">
            Your Jouney to Coding Conf <br />
            2025 Starts Here!
          </h2>
          <p className=" text-Neutral-300 flex justify-center items-center pt-4 text-base md:text-xl text-center md:text-start">
            secure your spot at next year's biggest coding conference
          </p>
          <div className="flex justify-center items-center pt-10 ">
            <form action="" onSubmit={submitForm}>
              <div className="">
                <label htmlFor="fileUpload" className="text-white pl-6 md:pl-0">
                  Upload Avatar
                </label>
                <br />
                <div className="relative px-6 md:px-0">
                  <input
                    type="file"
                    name={selectedFile}
                    id=""
                    accept="image/png, image/jpeg"
                    onChange={handleFileUpload}
                    className="border border-Neutral-300 border-dashed rounded-md h-24 w-full md:w-96 mt-2 cursor-pointer "
                  />

                  <div className="absolute z-40  top-5 inset-x-[158px] md:inset-x-[172px] bg-Neutral-700 border border-Neutral-500 rounded-lg h-10 w-10">
                    <img
                      src="/images/icon-upload.svg"
                      alt="upload-icon"
                      className="flex justify-center items-center h-10 w-10 px-2 cursor-pointer"
                    />
                  </div>
                  <p className="text-Neutral-0 absolute bottom-2 inset-x-14 md:inset-x-20 text-center text-sm cursor-pointer">
                    {selectedName || "Drag and drop or click to upload"}
                  </p>
                </div>
                <div className="flex space-x-3 items-center pt-2 px-6 md:px-0">
                  <img src="/images/icon-info.svg" alt="info-icon" />
                  <p className="text-Neutral-300 text-xs ">
                    Upload your photo (JPG or PNG, max size: 500KB)
                  </p>
                </div>
                <div className="pt-3 px-6 md:px-0 ">
                  <label htmlFor="fullname" className="text-Neutral-0 ">
                    Fullname
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="fullname"
                    id=""
                    value={fullName}
                    onChange={(e: any) => setFullname(e.target.value)}
                    className=" border border-Neutral-300 rounded-md h-10 w-full md:w-96 mt-2 pl-2 text-white"
                  />
                </div>
                <div className="pt-3 px-6 md:px-0 ">
                  <label htmlFor="emailAddress" className="text-Neutral-0 ">
                    Email Address
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="exampleemail1.com"
                    className=" placeholder-Neutral-300 border border-Neutral-300 rounded-md h-10 w-full md:w-96 mt-2 pl-2 placeholder:pl-3 text-white"
                  />
                </div>
                <div className="pt-3 px-6 md:px-0 ">
                  <label htmlFor="githubUser" className="text-Neutral-0  ">
                    GitHub Username
                  </label>
                  <br />
                  <input
                    type="text"
                    name="githubUser"
                    id=""
                    value={githubUsername}
                    onChange={(e: any) => setGithubUsername(e.target.value)}
                    placeholder="@yourusername"
                    className=" placeholder-Neutral-300 border border-Neutral-300 rounded-md h-10 w-full md:w-96 mt-2 pl-2 placeholder:pl-3 text-white"
                  />
                </div>
                <div className="pt-4 px-6 md:px-0 ">
                  <button className=" absolute z-20 bg-Orange-700 text-Neutral-900 text-center h-10 w-[86%] md:w-96 rounded-md font-bold cursor-pointer ">
                    Generate your ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* generate conterence ticket */}
        <div
          className={
            showTicket ? "absolute z-100 inset-x-4 md:inset-x-48 " : "hidden"
          }
        >
          <h2 className="text-white text-center text-2xl md:text-5xl font-bold md:font-800">
            Congrats,
            <span className="bg-gradient-to-r from-Orange-500 via-Orange-100 to-orange-50 text-transparent bg-clip-text">
              {fullName}!
            </span>{" "}
            <br />
            Your ticket is ready.
          </h2>
          <p className=" text-Neutral-300  pt-4 text-base md:text-xl text-center ">
            We've email your ticket to
            <br />
            <span className=" text-Orange-700">{email} </span> and will send
            updates in <br />
            the run up to the event.
          </p>
          <div className="absolute z-50 inset-x-0 md:inset-x-48">
            <div className=" flex justify-center items-center md:mt-20 mt-14 ">
              <div className="relative bg-Neutral-900">
                <img
                  src="/images/pattern-ticket.svg"
                  alt="ticket"
                  className=""
                />
                <div className="absolute top-6 left-4">
                  <img src="/images/logo-full.svg" alt="" />
                  <p className="pl-12 pt-2 text-Neutral-300 text-sm md:text-base">
                    {months[date.getMonth()] +
                      " " +
                      date.getDate() +
                      "," +
                      " " +
                      date.getFullYear()}{" "}
                    / Austine, TX
                  </p>
                  <div className="pt-6 md:pt-28  pb-6 md:pb-0 flex space-x-3">
                    <div className="md:h-14 md:w-14 h-10 w-10 ">
                      <img
                        src={selectedFile}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col space-y-0 md:space-y-1 ">
                      <p className="text-Neutral-0 text-base md:text-lg">
                        {fullName}
                      </p>
                      <div className="flex space-x-1 items-center">
                        <div>
                          <img
                            src="images/icon-github.svg"
                            alt="github-icon"
                            className="h-4 w-4 md:h-full md:w-full"
                          />
                        </div>
                        <div className="text-xs md:text-sm text-Neutral-300">
                          {githubUsername}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-1 md:right-6 top-16 md:top-32 ">
                  <p className="text-xl text-Neutral-300 transform rotate-90 ">
                    #123457
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
