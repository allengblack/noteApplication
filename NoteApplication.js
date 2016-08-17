/*Takes in a parameter author as the author of the note and saves this as an instance variable.
Create a notes list/array to store all the notes as an instance property.

Create the following functionality for the NotesApplication class
create(note_content) - This function takes the note content as the parameter and adds it to the notes list of the object.
listNotes() - This function lists out each of the notes in the notes list in the following format. 
The note_id parameter below represents the respective index of each of the items in the list, 
the NOTE_CONTENT represent the note content and the author represents the note author.
	
	Note ID: [note_id]
	[NOTE_CONTENT]

	By Author [author]
*/




class NoteApplication {
    
    constructor(author) {
        this.author = author;
        
        let notes = [];   
    }
    
    create(note_content) {
        this.notes.push(note_content);
    }

    listNotes() {
        for (i=0; i < notes.length; i++){
            console.log("Note ID = " + i);
            console.log(this.notes(i));
            console.log("By " + this.author);
        }
    }
}