const App = {
    data() {
        return {
            title: 'TODO',
            placeholderString: 'write a note',
            inputValue: '',
            notes: ['Note 1', 'Note 2']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        delNote(idx) {
            this.notes.splice(idx, 1);
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {

        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')