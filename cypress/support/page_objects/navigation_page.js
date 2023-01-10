require('@cypress/xpath')

// beforeEach(()=>{
//     //cy.clearAllSessionStorage()
//     cy.session('session',()=>{
//      cy.visit('/')
//         cy.wait(2000)
//         cy.get('input[type="email"].MuiOutlinedInput-input').type(Cypress.env("Email"))
//         cy.get('input[id="password"].MuiInputBase-inputAdornedEnd').type(Cypress.env("Password"))
//         cy.get('.MuiButtonBase-root').click()
//         cy.wait(2000)
//     })
// })

//info: Assertions
export class Assertions{
    assertion_with_url(url){
        cy.url().should('contain',Cypress.config().baseUrl + url)
        //cy.url().should('include','/signin')
    }
    assertion_with_area_selected(name){
        // cy.xpath('//button[@id="simple-tab-0"]').find('[aria-selected]')
        //     //.should('have.value','false')
        cy.xpath('//div[@class="MuiGrid-root css-1w38p8m"]').contains(name)
            .invoke('attr','aria-selected').then(isValue => {
                cy.log(isValue)
                expect(isValue).to.eq('true')
        })
    }
}

export class NavigationPage{

    login(email,password){
        cy.visit('/')
        cy.wait(1000)
        cy.get('input[type="email"].MuiOutlinedInput-input').type(email)
        cy.get('input[id="password"].MuiInputBase-inputAdornedEnd').type(password)
        cy.get('.MuiButtonBase-root').click()
        cy.wait(500)
    }

    logout(){
        
        cy.get('[class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"][data-testid="ExpandMoreIcon"]').click()
        cy.get('div[class="flex dropdown-menu-row align-center cursor-pointer"]').last().click()
        //cy.wait(2000)
    }

    SideNav(name){
        cy.get('div[class="sidebar-menu-top"]').parent('div').contains(name).click()
        cy.wait(2000)
        //cy.log(cy.get('div[class="sidebar-menu-top"]').parent('div'))
    }

    HeaderPD(name){
        cy.xpath('//div[@class="MuiGrid-root css-1w38p8m"]').contains(name).click()
        cy.wait(2000)
    }
}

export const NavigateTo = new NavigationPage()
export const AssertionCheck = new Assertions()