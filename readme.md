# codekiq-ui
  React based UI framework

## Components
### Cards

- Note Card
  ```
  import { CardNote } from 'codekiq-ui'
  .
  .
  <CardNote note={<div><h1>Heading</h1>Note Card</div>} />
  ```

- Square Card
  ```
  import { CardSquare } from 'codekiq-ui'
  .
  .
  <CardSquare content="Hey I'm Square Card" />
  ```

- Rectangle Card
  ```
  import { CardRect } from 'codekiq-ui'
  .
  .
  <CardRect
    image={'https://in.udacity.com/assets/iridium/images/homepage/shared/featured-cards/nd889-innlp.jpg'}
    image_alt={'enroll'}
    content={<span><h5>Enroll</h5>Codekiq Foundation</span>}
  />
  ```
