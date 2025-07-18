# Preparazione
- installare docker (seguire il readme) oppure installare i servizi manualmente
- Docker
  - installazione https://docs.docker.com/engine/install/debian/#install-using-the-repository
  - https://docs.docker.com/engine/install/linux-postinstall/
    - creare l'utente e il gruppo "docker" a sistema
  - test: `docker run hello-world`

# Primo avvio
- git clone
- creare il file `.env` copiando il `.env.example` e modificandolo opportunamente
- `./docker/8.3/project-installer/install-laravel-project.sh`
    - installa i vendor la prima volta - necessario per poi usare vendor/bin/sail
    - genera una nuova chiave app con artisan
- `docker login -u {username_gitlab} -p {gitlab_token} dev-git-ext.serverlet.com:5050`
  - il token deve essere un token di accesso personale con permessi di lettura e scrittura sui container registry
  - creare il token su Gitlab con permessi `read_registry`, se non esiste già. https://dev-git-ext.serverlet.com/-/user_settings/personal_access_tokens
  - NON serve farlo se si è già stato fatto in passato verso quel server
- `sail up -d`
    - sail scarica l'immagine dal container registry (se presente), altrimenti la costruisce
- `sail artisan migrate`
- `sail artisan db:seed`
- `sail artisan storage:link`
- modificare file hosts
    - `{ip-VM} {app-complete-domain}`
- `nvm install 24`
  - installazione nvm a sistema se necessario
- `nvm use 24`
- `yarn`
   - installazione yarn a sistema se necessario
- `yarn build`
- `sail artisan optimize`
- `sail artisan cache:clear`
- `sail artisan config:clear`

# Avvii successivi
- `sail up -d`
- `sail artisan migrate`
- `nvm use 24`
- `yarn`
- `yarn build`
- `yarn dev`
    - necessario solo durante l'implementazione se vengono aggiunti CSS o JS direttamente negli asset ( app.css && app.js ), oppure se si lavora con viste blade custom in cui è presente tailwind, react, ...

# Accesso
- APP_URL in env

# Utils
- Monitoring e bug tracking (solo local): http://APP_URL/telescope
- Analisi statica - Larastan: `sail php ./vendor/bin/phpstan analyse >> logs/larastan_$(date +'%Y-%m-%d_%H-%M-%S').txt`
- Code style - Pint: `sail php ./vendor/bin/pint --dirty >> /logs/pint_$(date +'%Y-%m-%d_%H-%M-%S').txt`
- Test - PhpUnit: `sail artisan test`
