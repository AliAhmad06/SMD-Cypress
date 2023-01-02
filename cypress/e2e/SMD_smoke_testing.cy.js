import { AssertionCheck, NavigateTo} from "../support/page_objects/navigation_page"

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
    NavigateTo.login('muhammad.ali+57@ceative.co.uk','123asd@ASD')
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
