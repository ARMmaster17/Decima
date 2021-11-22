import { rest } from 'msw'

export const handlers = [
    rest.get('/ping', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                value: 'pong',
            }),
        )
    }),
    rest.get('/sources', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                    {
                        Name: "Test Source 2",
                        UrlName: "testsource2",
                        Enabled: false
                    },
                    {
                        Name: "Test Source 3",
                        UrlName: "testsource3",
                        Enabled: true
                    }
                ]),
        )
    }),
]