
class NoteApplication {
    
    /** 
     * Class constructor
     * @param: author - author of all notes written
    */
    constructor(author) {
        this.author = author;
        
        let notes = [];   
    }
    
    /** 
     * Cfunction create() to write new note
     * @param: note_content - the content of note to be saved
    */
    create(note_content) {
        this.notes.push(note_content);
    }

    /**
     * function listNotes()
     * function to list notes by a particular author  
     */
    listNotes() {
        for (i=0; i < notes.length; i++){
            console.log("Note ID = " + i);
            console.log(this.notes(i));
            console.log("By Author " + this.author);
        }
    }
    
    /** 
     * function to get particular note by ID
     * @param: note_id
    */
    get(note_id) {
        console.log(notes[note_id]);
    }
    
    /**
     * function to print all notes that contain the specified search string
     * @param: search_text
     */
    search(search_text) {
        for (i=0; i < notes.length; i++){
            if ( notes[i].includes(search_text) ) {
                console.log("Showing results for search [" + search_text + "]");
                console.log("Note ID: " + i);
                console.log(notes[i]);
                console.log("By Author " + this.author);
            }
        }
    }

     /**
     * function to delete note with specified id
     * @param: note_id
     */
    delete(note_id) {
        this.notes.splice(note_id, 1);
        console.log("Note deleted.")
    }
    
    /**
     * function to edit a note of specified ID with new content
     * @param: note_id
     */
    edit(note_id, new_content) {
        this.notes[note_id] = new_content;
    }
    
}