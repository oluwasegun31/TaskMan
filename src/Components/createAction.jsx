import { redirect } from "react-router-dom";
/**
 * Form Action Function
 * 
 * This function accepts a request and handles the process of creating a new task.
 * It retrieves form data, updates local storage, and performs necessary checks.
 */

export const createAction = async ({ request }) => {
  // Get the form data
  const taskActionData = await request.formData();

  // Initialize an array for updating local storage and retrieve existing data
  let updatedArr = [];
  const storedArr = localStorage.getItem('Tasks');

  // If there's existing data, parse and store it in updatedArr
  if (storedArr) {
    updatedArr = JSON.parse(storedArr);
  }

  // Function to generate random chracters with letters an number to generate ID
  const generateRandomID = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  // Function to format numbers to have leading zero if less than 10
  const showZero =(num)=> {
    return num > 9 ? num : `0${num}`
  }
  // Function to get current time in HH:MM format
  const getTime =()=> {
    let date = new Date();
    let  hour = date.getHours();
    let minutes = date.getMinutes();
    let time = `${showZero(hour)}:${showZero(minutes)}`
    return time
  }
  // Function to get current day in "Day, DD Month, YYYY" format
  const getDay = ()=> {
    const monthAlph = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December']
    const dayAlph = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    let fullDate = new Date();
    const dayNum = fullDate.getDay();
    const day = dayAlph[dayNum - 1];
    let date = fullDate.getDate();
    let monthNum = fullDate.getMonth();
    let month = monthAlph[monthNum];
    let year = fullDate.getFullYear();
    let fullDay = `${day}, ${showZero(date)} ${month}, ${year}`
    return fullDay
  }

  // An array of colors to be used to randomly generate colors
  const colors = ['#fac5a7', '#e8faa7', '#a7facc', '#a7d9fa', '#e2a7fa', '#faa7ce']
  
  // Create an object to store the form data
  const details = {
    id: generateRandomID(6),
    title: taskActionData.get('title'),
    label: taskActionData.get('label'),
    priority: taskActionData.get('priority'),
    assignee: taskActionData.get('assignee'),
    desc: taskActionData.get('description'),
    time: getTime(),
    day: getDay(),
    bgColor: colors[Math.floor(Math.random() * colors.length)],
    isProgress: true
  };
  // Throw an error if any field is empty
  const {title, assignee, desc, label, priority} = details
  if(title === "" || assignee === "" || desc === "" || label === "" || priority === ""){
    return {error: 'All Fields must be filled'}
  }

  // Push the new data into the array and update local storage
  updatedArr.unshift(details);
  const updatedArrJson = JSON.stringify(updatedArr);
  localStorage.setItem('Tasks', updatedArrJson);

  // Redirect to home page after the action
  return redirect('/');
};