import 'tachyons';
import { Button ,Icon} from 'semantic-ui-react'
export default function Home() {
  return (
    <div className ='bg-grey'>
       <h1>Hello Next</h1>
       <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Icon flipped='horizontally' name='cloud' />
    <Icon flipped='vertically' name='cloud' />
    </div>
  )
}
