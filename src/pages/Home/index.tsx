import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountDownButton, TaskInput, MinutesAmountInput } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" type="text" placeholder="De um nome para seu projeto" />

          <label htmlFor="">durante</label>
          <MinutesAmountInput type="text" id="minutesAmount" placeholder="00" />

          <span>minutos.</span>
        </FormContainer>


        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type="submit">
          <Play size={24}/>
          Start
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
