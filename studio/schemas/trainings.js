export default {
    name: "trainings",
    title: "Trainings",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "datestart",
            type: "datetime",
        },
        {
            name: "dateend",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "company",
            type: "string"
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};
