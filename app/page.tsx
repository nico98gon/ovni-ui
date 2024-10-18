import Button from "./components/ui/Button";
import Heading, { Heading2 } from "./components/ui/Heading";

export default function Home() {
  return (
    // <div className={css({ fontSize: "2xl", fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0' })}>
    <>
      <Heading>
        Hello 🐼!
      </Heading>

      <Heading2>
        Hello 🐼!
      </Heading2>

      <Button>
        Boton
      </Button>
    </>
    // </div>
  )
}