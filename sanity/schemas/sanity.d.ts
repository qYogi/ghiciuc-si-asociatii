declare module '@sanity/types' {
    interface Rule {
        required(): Rule
        unique(): Rule
        max(length: number): Rule
    }
}