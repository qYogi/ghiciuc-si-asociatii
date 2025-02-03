const post = {
    name: 'post',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            options: {
                dateFormat: 'MMMM D, YYYY',
                timeFormat: 'HH:mm',
            },
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: (Rule: any) => Rule.max(200).required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'URL',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                    ],
                },
            ],
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            validation: (Rule: any) => Rule.unique(),
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 2,
            validation: (Rule: any) => Rule.max(160).required(),
        },
        {
            name: 'isFeatured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'author.profileImage',
        },
        prepare(selection: any) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
}

export default post