import { HistoryContainer, HistoryList } from "./styled";



export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minute</td>
              <td>Ha 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minute</td>
              <td>Ha 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minute</td>
              <td>Ha 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minute</td>
              <td>Ha 2 meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
