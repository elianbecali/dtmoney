import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Castegoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bootcamp Ignite</td>
            <td className="withdraw">-R$1.980,00</td>
            <td>Educação</td>
            <td>01/03/2021</td>
          </tr>
          
          <tr>
            <td>Dividendos TRXF11</td>
            <td className="deposit">R$2,10</td>
            <td>Investimentos</td>
            <td>16/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}