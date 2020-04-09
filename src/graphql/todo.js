const getTodos = `
    query {
        getTodos {
            id
            title
            text
        }
    }
`;

const getTodo = `
    query ($id: String!) {
        getTodo(id: $id) {
            id
            title
            text
        }  
    }
`;

export const queries = {
  getTodo,
  getTodos,
};

const updateTodo = `
    mutation ($id: String!, $title: String!, $text: String!) {
        updateTodo(id: $id, title: $title, text: $text) {
          id
          title
          text
        }
    }
`;

const addTodo = `
    mutation ($title: String!, $text: String!) {
        addTodo( title: $title, text: $text) {
          id
          title
          text
        }
    }
`;

const removeTodo = `
    mutation ($id: String!) {
        removeTodo(id: $id) {
          id
          title
          text
        }
    }
`;

export const mutations = {
  updateTodo,
  addTodo,
  removeTodo
};
