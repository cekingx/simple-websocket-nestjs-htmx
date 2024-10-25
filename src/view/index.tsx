import { PropsWithChildren } from "@kitajs/html"

export const Layout = (props: PropsWithChildren<{title: string}>) => {
  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title safe>{props.title ?? 'Document'}</title>
        <link rel="stylesheet" href="/style.css" />
        <script src="/htmx.min.js"></script>
      </head>
      <body>
        {props.children} 
      </body>
      </html>
    </>
  )
}