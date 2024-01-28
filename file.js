const fs = require("fs");

// create files

function createFileOne() {
    fs.appendFile(
        "append.txt",
        "This file is created using appendFile() method.",
        (err) => {
            if (err) throw err;
            console.log("file saved..");
        }
    );
}

function createFileTwo() {
    fs.writeFile(
        "write.txt",
        "This file is created using createFile() method.\n",
        (err) => {
            if (err) throw err;
            console.log("file created");
        }
    );
}

function openFileMethod() {
    fs.open("random.txt", "w", (err) => {
        if (err) throw err;
        console.log("file Opended");
    });
}

createFileOne();
// createFileTwo();
// openFileMethod();

//----------------------------------------------------------

// delete files

function deleteFile() {
    fs.unlink("./random.txt", (err) => {
        if (err) {
            throw err;
        } else {
            console.log("file deleted");
        }
    });
}

// deleteFile();

//------------------------------------------------------------

// rename file
function renameFile() {
    fs.rename("./random.txt", "./hello.txt", (err) => {
        if (err) throw err;
        console.log("file renamed");
    });
}

// renameFile();

//-------------------------------------------------------------
