// function sendMessage():void{
//     checkType(42);  
// }
let msg1:number,msg2:number;
msg1=msg2=0;
function checkType<T>(value: T): string {
    if (typeof value === 'number') {
      console.log(`The value is a number: ${value}`);
      return 'number';
    } else if (typeof value === 'string') {
      console.log(`The value is a string: "${value}"`);
      console.log("Brijith keran w");
      return 'string';
    } else {
      console.log(`The value is of type: ${typeof value}`);
      return 'invalid';
    }
  }
  type User = 1 | 2;

function sendMessage(user: User): void {
  
  const input = document.getElementById(`input${user}`) as HTMLInputElement;
 
  const message: string = input.value.trim();
  //
let value=message;
let targetUser=user;

  const numberInput = parseInt(value, 10);
    if(targetUser==2)
    {
      msg1++;
      const alert1 = document.getElementById('alert1') as HTMLElement;
        alert1.style.opacity="1";
        const alert11 = document.getElementById('notf1') as HTMLElement;
        alert11.innerHTML=msg1.toString();
        alert11.style.paddingLeft="5px";
        alert11.style.paddingRight="5px";
    }
    else if(targetUser==1)
    {
             msg2++;
      const alert2 = document.getElementById('alert2') as HTMLElement;
      alert2.style.opacity="1";
      const alert11 = document.getElementById('notf2') as HTMLElement;
      alert11.innerHTML=msg2.toString();
      alert11.style.paddingLeft="5px";
        alert11.style.paddingRight="5px";
    }
  if (!isNaN(numberInput)&& targetUser==2) {
      console.log("The input is a number:", numberInput);
      console.log("now checking...");
      const input1 = document.getElementById("alert1") as HTMLSpanElement;
      input1.innerHTML= checkType(numberInput); 
     
  } 
       else if (!isNaN(numberInput)&& targetUser==1) {
    console.log("The input is a number:", numberInput);
    const input2 = document.getElementById("alert2") as HTMLSpanElement;
      input2.innerHTML= checkType(numberInput); 
} 
  else if(targetUser==2 && isNaN(numberInput)){
    console.log("now checking...place 1");
      console.log("The input is a string:", value);
      const input3 = document.getElementById("alert1") as HTMLSpanElement;
      input3.innerHTML= checkType(value); 
  }
  else if(targetUser==1 && isNaN(numberInput)){
    const input4 = document.getElementById("alert2") as HTMLSpanElement;
    input4.innerHTML= checkType(value); 
  }


  //
  if (message === '') return;
  console.log(`Message from User ${user}: "${message}"`);
  appendMessage(1, message, user === 1 ? 'left' : 'right');
    appendMessage(2, message, user === 2 ? 'left' : 'right');


  input.value = '';
}
function checkInput(input: string | number): void {
  if (typeof input === 'number') {
      console.log("The input is a number:", input);
  } else if (typeof input === 'string') {
      console.log('The input is a string:', input);
      console.log("Brijith keran w");
  } else {
      console.log('Unknown type');
  }
}

function appendMessage(
    targetUser: 1 | 2, // User 1 or User 2
    message: string,
    alignment: 'left' | 'right'
  ): void {
    const messageContainer = document.getElementById(`chat${targetUser}`); // Dynamically choose the correct div
    console.log(`appendMessage called: targetUser = ${targetUser}, message = "${message}", alignment = ${alignment}`);
    const value = message;


   
    if (!messageContainer) {
        console.log(`Message container for chat${targetUser} not found.`);
        return;
      }
  
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `message ${alignment}`;
  
    messageContainer.appendChild(messageDiv);
    console.log(`Message container HTML after append: ${messageContainer.innerHTML}`);
  }
function user2():void{
    const user2Link = document.getElementById('chat2') as HTMLElement;
    const user2Link1 = document.getElementById('input-box2') as HTMLElement;

    const user1Link = document.getElementById('chat1') as HTMLElement;
    const user1Link1 = document.getElementById('input-box1') as HTMLElement;
    // user1Link.style.display="none";
    // user1Link1.style.display="none";
    // user2Link.style.display="flex";
    // user2Link1.style.display="flex";
   

    user1Link.classList.add('hidden');
    user1Link1.classList.add('hidden');
    user2Link.classList.remove('hidden');
    user2Link1.classList.remove('hidden');
    const alert1 = document.getElementById('alert2') as HTMLElement;
        alert1.style.opacity="0.5";
         alert1.innerHTML="online";
         const alert11 = document.getElementById('notf2') as HTMLElement;
        alert11.innerHTML="";
        const alert111 = document.getElementById('user1') as HTMLElement;
        alert111.style.color="rgb(11, 14, 11)";
        alert111.style.opacity="0.6";
        const alert112 = document.getElementById('user2') as HTMLElement;
        alert112.style.color="rgb(3, 116, 9)";
        alert112.style.opacity="1";
        msg2=0;
    }
    function user1() {
        const user1Link = document.getElementById('chat1') as HTMLElement;
        const user1Link1 = document.getElementById('input-box1') as HTMLElement;
        const user2Link = document.getElementById('chat2') as HTMLElement;
        const user2Link1 = document.getElementById('input-box2') as HTMLElement;
    
        user1Link.classList.remove('hidden');
        user1Link1.classList.remove('hidden');
        user2Link.classList.add('hidden');
        user2Link1.classList.add('hidden');
        const userinput = document.getElementById('input2') as HTMLInputElement;
        userinput.style.width="80%";
        const alert1 = document.getElementById('alert1') as HTMLElement;
        alert1.style.opacity="0.5";
        alert1.innerHTML="online";
        const alert11 = document.getElementById('notf1') as HTMLElement;
        alert11.innerHTML="";
        const alert111 = document.getElementById('user1') as HTMLElement;
        alert111.style.color="rgb(3, 116, 9)";
        const alert112 = document.getElementById('user2') as HTMLElement;
        alert112.style.color="rgb(11, 12, 11)";
        alert112.style.opacity="0.6";
        alert111.style.opacity="1";
        msg1=0;
    }
    interface Storable<T> {
      add(item: T): void;
      get(index: number): T;
      getSize(): number;
    }
    class ArrayWrapper<T> implements Storable<T> {
      private items: T[] = [];
    
      add(item: T): void {
        this.items.push(item);
      }
    
      get(index: number): T {
        if (index >= 0 && index < this.items.length) {
          return this.items[index];
        }
        throw new Error("Index out of bounds");
      }
    
      getSize(): number {
        return this.items.length;
      }
      getAll(): T[] {
        return this.items;
      }
    }
    type UserPassword = {
      username: string;
      password: string;
    };
    const users = new ArrayWrapper<UserPassword>();

    users.add({ username: "brijith", password: "1234" });
    users.add({ username: "keran", password: "abcd" });
    
    for (let i = 0; i < users.getSize(); i++) {
      const user = users.get(i);
      console.log(`User: ${user.username}, Password: ${user.password}`);
    }
function applyMembership(level: number): void
{
  const user1Link = document.getElementById('chat1') as HTMLElement;
  const user1Link1 = document.getElementById('input-box1') as HTMLElement;
  const user2Link = document.getElementById('chat2') as HTMLElement;
  const user2Link1 = document.getElementById('input-box2') as HTMLElement;

  user1Link.classList.add('hidden');
  user1Link1.classList.add('hidden');
  user2Link.classList.add('hidden');
  user2Link1.classList.add('hidden');
  const membership = document.getElementById('membership') as HTMLElement;

  membership.classList.remove('hidden');
}     
function confirmMembership() {
  const name = (document.getElementById('nameInput') as HTMLInputElement).value;
  const password = (document.getElementById('passwordInput') as HTMLInputElement).value;
 
  const isValidUser = users.getAll().some(user => user.username === name && user.password === password);

  if (isValidUser) {
    
    const membership = document.getElementById('membership') as HTMLElement;
    const user1Link = document.getElementById('chat1') as HTMLElement;
    const user1Link1 = document.getElementById('input-box1') as HTMLElement;
    membership.classList.add('hidden');
    user1Link.classList.remove('hidden');
    user1Link1.classList.remove('hidden');
    const plusButton = document.getElementById("plusButton") as HTMLButtonElement;
const fileInput = document.getElementById("fileInput") as HTMLInputElement;

const plusButton1 = document.getElementById("plusButton1") as HTMLButtonElement;
plusButton1.onclick = () => process(1);
plusButton1.style.color="black";
const plusButton2 = document.getElementById("plusButton2") as HTMLButtonElement;
plusButton2.onclick = () => process(2);
plusButton2.style.color="black";
//
  } else {
    alert("Invalid username or password.");
  }
}   
function process(user: 1 | 2): void {
  // Dynamically select the file input based on the user value
  const fileInput = document.getElementById(`fileInput${user}`) as HTMLInputElement;
  
  // Trigger file input click if the input element exists
  if (fileInput) {
    fileInput.click();
  } else {
    console.error(`File input for user ${user} not found!`);
  }
}


function handleFile(event: Event, user: 1 | 2): void {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    const imageUrl = URL.createObjectURL(file);
    console.log(`User ${user} selected image:`, file.name);

    // Create the image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Selected image';
    img.style.maxWidth = '200px'; // Adjust as needed

    // Create a div to hold the image
    const imageDiv = document.createElement('div');
    imageDiv.className = `message ${user === 1 ? 'left' : 'right'}`; // Align image based on sender
    imageDiv.appendChild(img);

    // Get both chat containers
    const chatContainer1 = document.getElementById('chat1');
    const chatContainer2 = document.getElementById('chat2');

    if (chatContainer1 && chatContainer2) {
      if (user === 1) {
        const input4 = document.getElementById("alert2") as HTMLSpanElement;
        input4.innerHTML= "image";
        const alert11 = document.getElementById('notf2') as HTMLElement;
        msg2++;
        alert11.innerHTML=msg2.toString();
        input4.style.opacity="1";
       
        // User 1 sends image - image will be left for User 1 and right for User 2
        chatContainer1.appendChild(imageDiv); // User 1's chat - left
        // Modify image div for User 2's chat to go right
        const imageDivForUser2 = imageDiv.cloneNode(true) as HTMLDivElement;
        imageDivForUser2.classList.remove('left');
        imageDivForUser2.classList.add('right'); // Align image to the right for User 2
        chatContainer2.appendChild(imageDivForUser2); // User 2's chat - right
      } else {
        // User 2 sends image - image will be left for User 2 and right for User 1
        chatContainer2.appendChild(imageDiv); // User 2's chat - left
        // Modify image div for User 1's chat to go right
        const imageDivForUser1 = imageDiv.cloneNode(true) as HTMLDivElement;
        imageDivForUser1.classList.remove('left');
        imageDivForUser1.classList.add('right'); // Align image to the right for User 1
        chatContainer1.appendChild(imageDivForUser1); // User 1's chat - right
      }
    }
  }
}
