class NotesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }

  getNotes() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createNote(value) {
    const note = {
      body: value,
    }

    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ note }),
    }).then(res => res.json())
  }

  updateNote(value, id) {
    const note = {
      body: value,
    }

    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ note }),
    }).then(res => res.json())
  }
}
