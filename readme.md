Current application (is):
- Spring-boot application with server side template rendering (thymeleaf)
- Templates (html files) are delivered by the server, but use plain html with Javascript to communicate with backend via REST.

Very future application (NOT relevant now):
- Spring boot application with just REST endpoints.
- Separate deployable frontend application fully React SPA.

Near future application (should):
- Spring-boot application with server side template rendering (thymeleaf) which delivers only one template, the index.html, which is a fully React SPA.

To get to the 'should' state, there is an in-between situation, where 'plain html with Javascript pages' need to be combined with 'React pages'.
In this in-between situation, the following statements apply:
- Current pages build process relies on Gulp, but the build is very simple. (can and should remain the same)
  - Development mode: Copy over the html from /src/main/resources/templates to /target/classes/templates and other static resources from /src/main/resources/static to /target/classes/static
  - Production mode: Same copy action but now pipe through terser and uglifyjs.  
- Current pages (Plain JS) and new pages (React) do NOT need to interact.
- All new web page development should be done with React and be stored in /src/main/react-app
- New page development will replace current html pages one-by-one and this is not SPA, so
  - That means that we will have a situation with multiple React html pages which point to the same React components but have a different entry point.
  - entrypoint-1.html will have a React root id of 'entrypoint-1' for example and entrypoint-2.html will have a React root id of 'entrypoint-2'
- The React build output needs to be stored in /target/classes/react-app

Very nice to have:
A development mode (local server) where changes are detected in all static resources.

