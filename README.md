=== RUN INSTRUCTION

```
bundle && npm install

```

maybe you also need to do

```
cd client
npm install
```

then run 

```
rake db:create
rake db:migrate
npm run rails-server
```

last command run both rails server and webpack server
