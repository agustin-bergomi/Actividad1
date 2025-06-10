public class GoogleSearchTest {

    // por que primero WebDriver y despues ChromeDriver?
    private WebDriver driver;

    @Before
    private void setUp() {
        System.setProperty("webdriver.chrome.driver", "/Users/agustinbergomi/Desktop/chromedriver");
        driver = new ChromeDriver;
        driver.manage().window().maximize();
        driver.get("https://google.com")
    }

    @Test
    private void testGooglePage() {
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.clear();
        searchBox.sendKeys("quality stream");
        searchBox.submit()
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        assertEquals("quality stream", driver.getTitle);

    }

    @After
    public void tearDown()
    driver.quit()

}