import { AssertionCheck, Assertions, NavigateTo} from "../support/page_objects/navigation_page"

const credentials = 
{
  'First Name': 'Ali',
  'Last Name': 'Ahmad',
  'Email Address': Cypress.env("Email"),
  'Password': Cypress.env("Password"),
}

describe("Log In Functionality", () => {
//   it("Log In Test", () => {
//     cy.visit("/");

//     //cy.get('[type="email"]').parent('[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-segi59"]').click();

//     //: Find by element tag name
//     cy.get("input");

//     //:Find by attribute name
//     cy.get("[aria-invalid]");

//     //: Find by class name
//     cy.get(".MuiOutlinedInput-input");

//     //: Find by Multiple classes names
//     cy.get(".MuiInputBase-root.MuiOutlinedInput-root");

//     //: Find by attribute name and value
//     cy.get('[id="email"]');

//     //: Find by Multiple attributes
//     cy.get("[aria-invalid][id]");

//     //: Find value by tag name, attribute with value, ID and Class name
//     cy.get('input[type="email"].MuiOutlinedInput-input');
//   });

  it('Log In Pass',()=>{
    NavigateTo.login('muhammad.ali+57@ceative.co.uk','123asd@ASD')
    AssertionCheck.assertion_with_url('/home')
  })

  it('Log In Fail',()=>{
    NavigateTo.login('muhammad.ali+57@ceative.co.uk','123asd@ASDa')
    cy.get('[class="error-color error-text font-family-roboto secondary-title font-weight-400"]').should('contain','Incorrect username or password.')
  })

})


describe('Log Out Functionality',()=>{
  it('Log Out Pass',()=>{
    NavigateTo.login(credentials["Email Address"],credentials["Password"])
    AssertionCheck.assertion_with_url('/home')
    NavigateTo.logout()
    cy.wait(2000)
    AssertionCheck.assertion_with_url('/authentication/signin')
  })
})

describe('Personal Details',()=>{
  it('Checking Personal Details',()=>{
    NavigateTo.login('muhammad.ali+57@ceative.co.uk','123asd@ASD')
    NavigateTo.SideNav('Account settings')
    cy.get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 bg-card-white css-15j76c0"]').then(Ass=>{
      const firstname = Ass.find('div').text()
      expect(firstname).to.contain('First Name')
    })

  })
})

//  describe.only('Then',()=>{
//   it('Checking then',()=>{
//      cy.contains('div[class="MuiGrid-root MuiGrid-container padding-4 margin-top-0 css-f86t6j"]','First Name').then(Ass=>{
//       const firstname = Ass.find('[class="primary-title flex align-center black-color"]').text()
//       expect(firstname).to.equal('First Name')
//      })
//   })
// })

describe.only('DOB',()=>{
  it('Check DOB',()=>{
    //NavigateTo.login(credentials["Email Address"],credentials["Password"])
    cy.wait(2000)
    NavigateTo.SideNav('Account settings')
    cy.wait(2000)
    //cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-slyssw"]')
      //.click().type('4')
    //cy.wait(2000)
    cy.contains('div','Date of Birth').find('button').then(input=>{
      cy.wrap(input).click()
      //cy.get('[class="MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin css-ub1r1"]').contains('22').click()
      cy.get('.MuiPickersDay-root').contains('22').click()
      cy.wrap(input).invoke('val').should('include','01/22/1938')
      //cy.contains('22').click()
    })
  })
})

describe('Kitchen Details',()=>{
  it('Kictchen Details',()=>{
    NavigateTo.login(credentials["Email Address"],credentials["Password"])
    NavigateTo.SideNav('Account settings')
    NavigateTo.HeaderPD('Kitchen’s Detail')
    AssertionCheck.assertion_with_area_selected('Kitchen’s Detail')

  })

})

  describe('UTR Number Check',()=>{
    it('UTR Number',()=>{
      NavigateTo.login(credentials["Email Address"],credentials["Password"])
      NavigateTo.SideNav('Account settings')
      NavigateTo.HeaderPD('License')
      AssertionCheck.assertion_with_area_selected('License')
      cy.xpath('//input[@id="utrNumberValue"]').should('have.value', '34568 12397')
      cy.xpath('//input[@id="utrNumberValue"]').should('have.prop', 'value').should('match', /^\d{5} \d{5}$/)
      cy.xpath('//input[@id="utrNumberValue"]').invoke('val').should('match', /^\d{5} \d{5}$/)
  
    })
})