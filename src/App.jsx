import React from "react";
import Card from "./assets/components/Card";

const users = [
  {
    name: "Sidra Akhtar",
    username: "sidra_01",
    age: 24,
    occupation: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Ali Khan",
    username: "ali_coder",
    age: 27,
    occupation: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Hamza Javaid",
    username: "hamza_js",
    age: 30,
    occupation: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Sara Yousuf",
    username: "sara.tech",
    age: 26,
    occupation: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    name: "Junaid Ahmed",
    username: "junaid_ml",
    age: 28,
    occupation: "ML Engineer",
    image: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    name: "Ayesha Bano",
    username: "ayesha_writer",
    age: 25,
    occupation: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    name: "Fahad Rehman",
    username: "fahad_admin",
    age: 31,
    occupation: "System Admin",
    image: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    name: "Komal Zahra",
    username: "komal_react",
    age: 23,
    occupation: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    name: "Usman Tariq",
    username: "usman_backend",
    age: 29,
    occupation: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
    name: "Hina Sheikh",
    username: "hina_php",
    age: 24,
    occupation: "PHP Developer",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Bilal Qureshi",
    username: "bilal_devops",
    age: 32,
    occupation: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  //add more users
  {
    name: "Zara Ali",
    username: "zara_designer",
    age: 27,
    occupation: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    name: "Hina Sheikh",
    username: "hina_php",
    age: 24,
    occupation: "PHP Developer",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Bilal Qureshi",
    username: "bilal_devops",
    age: 32,
    occupation: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  //add more users
  {
    name: "Zara Ali",
    username: "zara_designer",
    age: 27,
    occupation: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
    {
    name: "Fahad Rehman",
    username: "fahad_admin",
    age: 31,
    occupation: "System Admin",
    image: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    name: "Komal Zahra",
    username: "komal_react",
    age: 23,
    occupation: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    name: "Usman Tariq",
    username: "usman_backend",
    age: 29,
    occupation: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/20.jpg"
  },

];

const App = () => {
  return (
    <div className="min-h-screen bg-green-100 px-6 py-10">
      <h1 className="text-5xl font-bold text-center mb-8">Add Friends</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
        {users.map((user, index) => (
          <div key={index} style={{ width: 400 }}>
            <Card
              name={user.name}
              username={user.username}
              age={user.age}
              occupation={user.occupation}
              image={user.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
