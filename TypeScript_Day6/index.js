// function sendMessage():void{
//     checkType(42);  
// }
var msg1, msg2;
msg1 = msg2 = 0;
function checkType(value) {
    if (typeof value === 'number') {
        console.log("The value is a number: ".concat(value));
        return 'number';
    }
    else if (typeof value === 'string') {
        console.log("The value is a string: \"".concat(value, "\""));
        console.log("Brijith keran w");
        return 'string';
    }
    else {
        console.log("The value is of type: ".concat(typeof value));
        return 'invalid';
    }
}
function sendMessage(user) {
    var input = document.getElementById("input".concat(user));
    var message = input.value.trim();
    //
    var value = message;
    var targetUser = user;
    var numberInput = parseInt(value, 10);
    if (targetUser == 2) {
        msg1++;
        var alert1 = document.getElementById('alert1');
        alert1.style.opacity = "1";
        var alert11 = document.getElementById('notf1');
        alert11.innerHTML = msg1.toString();
        alert11.style.paddingLeft = "5px";
        alert11.style.paddingRight = "5px";
    }
    else if (targetUser == 1) {
        msg2++;
        var alert2 = document.getElementById('alert2');
        alert2.style.opacity = "1";
        var alert11 = document.getElementById('notf2');
        alert11.innerHTML = msg2.toString();
        alert11.style.paddingLeft = "5px";
        alert11.style.paddingRight = "5px";
    }
    if (!isNaN(numberInput) && targetUser == 2) {
        console.log("The input is a number:", numberInput);
        console.log("now checking...");
        var input1 = document.getElementById("alert1");
        input1.innerHTML = checkType(numberInput);
    }
    else if (!isNaN(numberInput) && targetUser == 1) {
        console.log("The input is a number:", numberInput);
        var input2 = document.getElementById("alert2");
        input2.innerHTML = checkType(numberInput);
    }
    else if (targetUser == 2 && isNaN(numberInput)) {
        console.log("now checking...place 1");
        console.log("The input is a string:", value);
        var input3 = document.getElementById("alert1");
        input3.innerHTML = checkType(value);
    }
    else if (targetUser == 1 && isNaN(numberInput)) {
        var input4 = document.getElementById("alert2");
        input4.innerHTML = checkType(value);
    }
    //
    if (message === '')
        return;
    console.log("Message from User ".concat(user, ": \"").concat(message, "\""));
    appendMessage(1, message, user === 1 ? 'left' : 'right');
    appendMessage(2, message, user === 2 ? 'left' : 'right');
    input.value = '';
}
// function checkInput(input) {
//     if (typeof input === 'number') {
//         console.log("The input is a number:", input);
//     }
//     else if (typeof input === 'string') {
//         console.log('The input is a string:', input);
//         console.log("Brijith keran w");
//     }
//     else {
//         console.log('Unknown type');
//     }
// }
function appendMessage(targetUser, // User 1 or User 2
message, alignment) {
    var messageContainer = document.getElementById("chat".concat(targetUser)); // Dynamically choose the correct div
    console.log("appendMessage called: targetUser = ".concat(targetUser, ", message = \"").concat(message, "\", alignment = ").concat(alignment));
    var value = message;
    if (!messageContainer) {
        console.log("Message container for chat".concat(targetUser, " not found."));
        return;
    }
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = "message ".concat(alignment);
    messageContainer.appendChild(messageDiv);
    console.log("Message container HTML after append: ".concat(messageContainer.innerHTML));
}
function user2() {
    var user2Link = document.getElementById('chat2');
    var user2Link1 = document.getElementById('input-box2');
    var user1Link = document.getElementById('chat1');
    var user1Link1 = document.getElementById('input-box1');
    // user1Link.style.display="none";
    // user1Link1.style.display="none";
    // user2Link.style.display="flex";
    // user2Link1.style.display="flex";
    user1Link.classList.add('hidden');
    user1Link1.classList.add('hidden');
    user2Link.classList.remove('hidden');
    user2Link1.classList.remove('hidden');
    var alert1 = document.getElementById('alert2');
    alert1.style.opacity = "0.5";
    alert1.innerHTML = "online";
    var alert11 = document.getElementById('notf2');
    alert11.innerHTML = "";
    var alert111 = document.getElementById('user1');
    alert111.style.color = "rgb(11, 14, 11)";
    alert111.style.opacity = "0.6";
    var alert112 = document.getElementById('user2');
    alert112.style.color = "rgb(3, 116, 9)";
    alert112.style.opacity = "1";
    msg2 = 0;
}
function user1() {
    var user1Link = document.getElementById('chat1');
    var user1Link1 = document.getElementById('input-box1');
    var user2Link = document.getElementById('chat2');
    var user2Link1 = document.getElementById('input-box2');
    user1Link.classList.remove('hidden');
    user1Link1.classList.remove('hidden');
    user2Link.classList.add('hidden');
    user2Link1.classList.add('hidden');
    var userinput = document.getElementById('input2');
    userinput.style.width = "80%";
    var alert1 = document.getElementById('alert1');
    alert1.style.opacity = "0.5";
    alert1.innerHTML = "online";
    var alert11 = document.getElementById('notf1');
    alert11.innerHTML = "";
    var alert111 = document.getElementById('user1');
    alert111.style.color = "rgb(3, 116, 9)";
    var alert112 = document.getElementById('user2');
    alert112.style.color = "rgb(11, 12, 11)";
    alert112.style.opacity = "0.6";
    alert111.style.opacity = "1";
    msg1 = 0;
}
var ArrayWrapper = /** @class */ (function () {
    function ArrayWrapper() {
        this.items = [];
    }
    ArrayWrapper.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayWrapper.prototype.get = function (index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        throw new Error("Index out of bounds");
    };
    ArrayWrapper.prototype.getSize = function () {
        return this.items.length;
    };
    ArrayWrapper.prototype.getAll = function () {
        return this.items;
    };
    return ArrayWrapper;
}());
var users = new ArrayWrapper();
users.add({ username: "brijith", password: "1234" });
users.add({ username: "keran", password: "abcd" });
for (var i = 0; i < users.getSize(); i++) {
    var user = users.get(i);
    console.log("User: ".concat(user.username, ", Password: ").concat(user.password));
}
function applyMembership(level) {
    var user1Link = document.getElementById('chat1');
    var user1Link1 = document.getElementById('input-box1');
    var user2Link = document.getElementById('chat2');
    var user2Link1 = document.getElementById('input-box2');
    user1Link.classList.add('hidden');
    user1Link1.classList.add('hidden');
    user2Link.classList.add('hidden');
    user2Link1.classList.add('hidden');
    var membership = document.getElementById('membership');
    membership.classList.remove('hidden');
}
function confirmMembership() {
    var name = document.getElementById('nameInput').value;
    var password = document.getElementById('passwordInput').value;
    var isValidUser = users.getAll().some(function (user) { return user.username === name && user.password === password; });
    if (isValidUser) {
        var membership = document.getElementById('membership');
        var user1Link = document.getElementById('chat1');
        var user1Link1 = document.getElementById('input-box1');
        membership.classList.add('hidden');
        user1Link.classList.remove('hidden');
        user1Link1.classList.remove('hidden');
        var plusButton = document.getElementById("plusButton");
        var fileInput = document.getElementById("fileInput");
        var plusButton1 = document.getElementById("plusButton1");
        plusButton1.onclick = function () { return process(1); };
        plusButton1.style.color = "black";
        var plusButton2 = document.getElementById("plusButton2");
        plusButton2.onclick = function () { return process(2); };
        plusButton2.style.color = "black";
        //
    }
    else {
        alert("Invalid username or password.");
    }
}
function process(user) {
    // Dynamically select the file input based on the user value
    var fileInput = document.getElementById("fileInput".concat(user));
    // Trigger file input click if the input element exists
    if (fileInput) {
        fileInput.click();
    }
    else {
        console.error("File input for user ".concat(user, " not found!"));
    }
}
function handleFile(event, user) {
    var target = event.target;
    if (target.files && target.files.length > 0) {
        var file = target.files[0];
        var imageUrl = URL.createObjectURL(file);
        console.log("User ".concat(user, " selected image:"), file.name);
        // Create the image element
        var img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Selected image';
        img.style.maxWidth = '200px'; // Adjust as needed
        // Create a div to hold the image
        var imageDiv = document.createElement('div');
        imageDiv.className = "message ".concat(user === 1 ? 'left' : 'right'); // Align image based on sender
        imageDiv.appendChild(img);
        // Get both chat containers
        var chatContainer1 = document.getElementById('chat1');
        var chatContainer2 = document.getElementById('chat2');
        if (chatContainer1 && chatContainer2) {
            if (user === 1) {
                var input4 = document.getElementById("alert2");
                input4.innerHTML = "image";
                var alert11 = document.getElementById('notf2');
                msg2++;
                alert11.innerHTML = msg2.toString();
                input4.style.opacity = "1";
                // User 1 sends image - image will be left for User 1 and right for User 2
                chatContainer1.appendChild(imageDiv); // User 1's chat - left
                // Modify image div for User 2's chat to go right
                var imageDivForUser2 = imageDiv.cloneNode(true);
                imageDivForUser2.classList.remove('left');
                imageDivForUser2.classList.add('right'); // Align image to the right for User 2
                chatContainer2.appendChild(imageDivForUser2); // User 2's chat - right
            }
            else {
                // User 2 sends image - image will be left for User 2 and right for User 1
                chatContainer2.appendChild(imageDiv); // User 2's chat - left
                // Modify image div for User 1's chat to go right
                var imageDivForUser1 = imageDiv.cloneNode(true);
                imageDivForUser1.classList.remove('left');
                imageDivForUser1.classList.add('right'); // Align image to the right for User 1
                chatContainer1.appendChild(imageDivForUser1); // User 1's chat - right
            }
        }
    }
}
