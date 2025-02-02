// schemas/author.ts
const author = {
    name: 'author',
    title: 'Authors',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule: any) => Rule.required(),
                },
            ],
        },
        {
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 4,
            validation: (Rule: any) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'name',
            role: 'role',
            media: 'profileImage',
        },
        prepare(selection: any) {
            const { role } = selection
            return { ...selection, subtitle: role }
        },
    },
}

export default author