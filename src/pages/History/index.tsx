import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styled";



export function History() {
  const { cycles } = useContext(CyclesContext)

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
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount}</td>
                <td>{cycle.startDate.toISOString()}</td>
                <td>
                  {cycle.finishedDate && <Status statusColor="green">Finished</Status>}
                  {cycle.interruptedDate && <Status statusColor="red">Interrupted</Status>}
                  {!cycle.finishedDate && !cycle.interruptedDate &&
                    <Status statusColor="yellow">In progress</Status>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
