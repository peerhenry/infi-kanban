import uuid from '@/utils/uuid.js'

export default {
  name: 'New board',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          name: 'first task',
          id: uuid(),
          description: '',
          userAssigned: null,
        },
        {
          name: 'second task',
          id: uuid(),
          description: '',
          userAssigned: null,
        },
      ],
    },
    {
      name: 'done',
    },
  ],
}
