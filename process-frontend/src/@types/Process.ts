import Sight from "./Sight";

export default interface Process {
  id: number
  description: string
  sights: Sight[]
}