const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl} alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😒'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😒'}</p><br>
                                            <p>${user.followers ?? '0'} <b>Followers</b> &nbsp; | &nbsp; ${user.following ?? '0'} <b>Following</b>
                                        </div>
                                    </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItems}</ul>
                                            </div>`
        }

        let eventsItems = ''
        user.events.forEach(ev => eventsItems += 
            `<li><b>${ev.repo.name}</b> &nbsp; - ${ev.payload.commits ? ev.payload.commits[0].message : 'Não possui commits' }</li>`
            )

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos Recentes</h2><br>
                                                <ul>${eventsItems}</ul>
                                            </div>`
        }
        user.events.forEach(ev => console.log(ev))
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }