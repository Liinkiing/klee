import React from 'react'
import { Meta, Story } from '@storybook/react'
import Modal from './Modal'
import { ModalProps } from './Modal'
import { Button } from '../button'
import { Heading, Text } from '../typography'

const meta: Meta = {
  title: 'Library/Modal',
  component: Modal,
  argTypes: {
    disclosure: { table: { disable: true }, control: { disable: true } },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ModalProps> = args => (
  <Modal {...args} disclosure={<Button>Open</Button>}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Heading>Hello Klee</Heading>
        </Modal.Header>
        <Modal.Body>
          <Text>How are you doing?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              alert('Great')
              hide()
            }}
            variant="semi-transparent"
          >
            Cool
          </Button>
          <Button
            onClick={() => {
              alert('Anw...')
              hide()
            }}
            variant="semi-transparent"
          >
            Sad
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)

export const Default = Template.bind({})

Default.args = {
  ariaLabel: 'Modal example',
}

export const WithCustomization = Template.bind({})

WithCustomization.args = {
  ariaLabel: 'Modal example',
  bg: 'cyan.500',
  color: 'white',
  width: ['100%', '300px'],
}

export const WithLongContent: Story<ModalProps> = args => (
  <Modal {...args} disclosure={<Button>Open</Button>}>
    <Modal.Header>
      <Heading>Hello Klee</Heading>
    </Modal.Header>
    <Modal.Body spacing={4}>
      <Text>I have something very long to tell you...</Text>
      <Text>
        But first, you can change how the modal will be scrolled by using the <code>scrollBehavior</code> prop.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem explicabo, hic libero minima
        repellendus. Aut corporis deleniti expedita ipsa libero possimus temporibus voluptatem voluptatibus? Dolorem eum
        iure laborum minima.
      </Text>
      <Text>
        Accusantium aliquid amet commodi delectus deserunt distinctio dolorem est excepturi explicabo fugit laborum
        maiores modi molestias mollitia nesciunt nisi officia optio quas qui quos similique, sit sunt tempore ut vero.
      </Text>
      <Text>
        Consequatur dicta doloremque ea enim ex explicabo, facilis, id inventore itaque labore minima neque pariatur
        perferendis, quasi totam! Consequatur harum ipsum laborum minus quasi ratione ullam velit. Asperiores explicabo,
        modi.
      </Text>
      <Text>
        Accusamus aliquam animi beatae consectetur debitis dolorem error esse est expedita fugiat id illum, impedit ipsa
        ipsam iusto libero molestias, necessitatibus obcaecati officia praesentium provident quaerat quia quidem
        quisquam vero.
      </Text>
      <Text>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Text>
      <Text>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Text>
      <Text>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Text>
      <Text>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Text>
      <Text>
        Expedita iure reiciendis sapiente soluta voluptate. Aspernatur, consequuntur dignissimos dolorem eaque enim hic
        illum iure laudantium libero magnam minima minus officia praesentium quisquam, quos repellat soluta veniam,
        voluptas voluptates voluptatum?
      </Text>
    </Modal.Body>
  </Modal>
)

WithLongContent.args = {
  ...Default.args,
}
