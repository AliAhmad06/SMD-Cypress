

//info: Assertions
export class Assertions{
    assertion_with_url(url){
        cy.url().should('contain',Cypress.config().baseUrl + url)
        //cy.url().should('include','/signin')
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
    }

    SideNav(name){
        cy.get('div[class="sidebar-menu-top"]').parent('div').contains(name).click()
        //cy.log(cy.get('div[class="sidebar-menu-top"]').parent('div'))
    }
}

export const NavigateTo = new NavigationPage()
export const AssertionCheck = new Assertions()