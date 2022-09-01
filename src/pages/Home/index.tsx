import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountdownContainer, Separator } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="">durante</label>
          <input type="text" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>


        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24}/>
          Start
        </button>
      </form>
    </HomeContainer>
  )
}
