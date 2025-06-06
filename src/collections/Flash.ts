import { CollectionConfig } from 'payload'

const Flash: CollectionConfig = {
  slug: 'flashes',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'price', type: 'number' },
    { name: 'size', type: 'text' },
  ],
}

export default Flash
