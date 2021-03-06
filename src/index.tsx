import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Bootcamp Ignite - ReactJS',
          type: 'withdraw',
          category: 'Investimentos',
          amount: 1980,
          createdAt: new Date('2021-02-12 07:00:00')
        },
        {
          id: 2,
          title: 'Freelance website',
          type: 'deposit',
          category: 'desenvolvimento',
          amount: 7000,
          createdAt: new Date('2021-02-10 18:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
