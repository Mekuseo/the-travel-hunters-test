import React from 'react'
import Counter from '../utils/Counter'
import { useState } from 'react'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

export const RoomDetails = () => {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [selectedCategory1, setSelectedCategory1] = useState('Select Category');
    const [selectedCategory2, setSelectedCategory2] = useState('Select Category');

    const handleCategoryClick = () => {
        setShowDropdown1(!showDropdown1);
    };

    const handleRoomClassCategoryClick = (event) => {
        event.stopPropagation();
        setShowDropdown2(!showDropdown2);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory1(category);
        setShowDropdown1(false);
    };

    const handleCategorySelect2 = (category) => {
        setSelectedCategory2(category);
        setShowDropdown2(false);
    };

    return (
        <div className='room-details-box'>

            <h2 className='property-header'>Rooms and details</h2>
            <div className='counter-box'>
                <p>Total number of bedrooms in your property</p>
                <Counter initialValue={2} />
            </div>

            <h2 className='property-header'>Number of room types</h2>
            <small>The types of classes of rooms in this property</small>
            <div className='counter-box'>
                <p>Total number of bedrooms in your property</p>
                <Counter initialValue={2} />
            </div>

            <h2 className='property-header'>Rooms type 1</h2>
            <div className='counter-box'>
                <p>Give this room type a name</p>
                <input type='text' placeholder='E.g. Double exclusive, single' className='input-box-roomType' />
            </div>

            <h2 className='property-header'>Room type capacity</h2>
            <div className='counter-box'>
                <p>How many people can this room type accommodate?</p>
                <Counter initialValue={2} />
            </div>

            <h2 className='property-header'>Type of room</h2>
            <div className='counter-box category-selection'>
                <button className='category-btn' onClick={handleCategoryClick}>{selectedCategory1}<FiChevronDown />
                    {showDropdown1 && (
                        <div className='category-dropdown'>
                            <ul>
                                <li onClick={() => handleCategorySelect('Single')}>Single</li>
                                <li onClick={() => handleCategorySelect('Double')}>Double</li>
                                <li onClick={() => handleCategorySelect('Twin')}>Twin</li>
                                <li onClick={() => handleCategorySelect('Studio Suite')}>Studio Suite</li>
                                <li onClick={() => handleCategorySelect('Quadruple')}>Quadruple</li>
                                <li onClick={() => handleCategorySelect('Cottage')}>Cottage</li>
                                <li onClick={() => handleCategorySelect('Chalet')}>Chalet</li>
                                <li onClick={() => handleCategorySelect('Suite')}>Suite</li>
                            </ul>
                        </div>
                    )}
                </button>
            </div>

            <h2 className='property-header'>Type of bed</h2>
            <small>What type of bed does this room have?</small>
            <div className='counter-box'>
                <form className='flex-form'>
                    <div>
                        <input type='checkbox' name='bed' value='single' id='single' />
                        <label htmlFor='single'>Single</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='double-bed' id='double-bed' />
                        <label htmlFor='double-bed'>Double bed</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='bunk-bed' id='bunk-bed' />
                        <label htmlFor='bunk-bed'>Bunk bed</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='Double' id='Double' />
                        <label htmlFor='Double'>Double</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='king' id='king' />
                        <label htmlFor='king'>King</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='sofa-bed' id='sofa-bed' />
                        <label htmlFor='sofa-bed'>Sofa bed</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='queen-bed' id='queen-bed' />
                        <label htmlFor='queen-bed'>Queen bed</label>
                    </div>

                    <div>
                        <input type='checkbox' name='bed' value='super-king' id='super-king' />
                        <label htmlFor='super-king'>Super King</label>
                    </div>

                    <div>
                        <div className='checkbox-btn'>+</div>
                        <div>Add more</div>
                    </div>
                </form>
            </div>

            <h2 className='property-header'>Room class</h2>
            <div className='counter-box category-selection'>
                <button className='category-btn' onClick={handleRoomClassCategoryClick}>{selectedCategory2}<FiChevronDown />
                    {showDropdown2 && (
                        <div className='category-dropdown'>
                            <ul>
                                <li onClick={() => handleCategorySelect2('Basic')}>Basic</li>
                                <li onClick={() => handleCategorySelect2('Business')}>Business</li>
                                <li onClick={() => handleCategorySelect2('Classic')}>Classic</li>
                                <li onClick={() => handleCategorySelect2('City')}>City</li>
                                <li onClick={() => handleCategorySelect2('Comfort')}>Comfort</li>
                                <li onClick={() => handleCategorySelect2('Deluxe')}>Deluxe</li>
                                <li onClick={() => handleCategorySelect2('Design')}>Design</li>
                                <li onClick={() => handleCategorySelect2('Luxury')}>Luxury</li>
                                <li onClick={() => handleCategorySelect2('Panoramic')}>Panoramic</li>
                                <li onClick={() => handleCategorySelect2('Elite')}>Elite</li>
                                <li onClick={() => handleCategorySelect2('Family')}>Family</li>
                                <li onClick={() => handleCategorySelect2('Exclusive')}>Exclusive</li>
                                <li onClick={() => handleCategorySelect2('Executive')}>Executive</li>
                                <li onClick={() => handleCategorySelect2('Grand')}>Grand</li>
                                <li onClick={() => handleCategorySelect2('Honeymoon')}>Honeymoon</li>
                                <li onClick={() => handleCategorySelect2('Junior')}>Junior</li>
                                <li onClick={() => handleCategorySelect2('Presidential')}>Presidential</li>
                            </ul>
                        </div>
                    )}
                </button>
            </div>

            <h2 className='property-header'>Room rates</h2>
            <small>You get to input your prices based on guests and other prevailing factors</small>
            <div className='counter-box room-rates'>
                <div>
                    <h4>Nightly rates</h4>
                    <p>input your price per night for this property</p>
                    <input type="number" placeholder="₦5000.00" className="input-box-price input-longer" />
                </div>
                <div>
                    <h4>Weekly rates</h4>
                    <p>Discount that will apply when guest(s) book for 7 nights and more, up untill 27 nights</p>
                    <input type="text" placeholder="10% off" className="input-box-price" /><span><input type='text' placeholder='input price' className='input-box-price input-shorter'></input></span>
                </div>
                <div>
                    <h4>Monthly  rates</h4>
                    <p>Discount that will apply when guest(s) book for 28 nights, and more</p>
                    <input type="text" placeholder="10% off" className="input-box-price" /><span><input type='text' placeholder='input price' className='input-box-price input-shorter'></input></span>
                </div>
                <small className='warning'>Guests will receive the lowest rate if multiple rates apply*</small>
            </div>

            <h2 className='property-header'>Late night deals</h2>
            <div className='counter-box'>
                <h4>How it works.</h4>
                <div className='late-night-flex'>
                    <div className='late-night-bullets'><FiChevronRight /></div>
                    <p>30% discount of room price.</p>
                </div>
                <div className='late-night-flex'>
                    <div className='late-night-bullets'><FiChevronRight /></div>
                    <p>Check-in time is from 9:00pm, and hotel check-out time applies.</p>
                </div>
                <div className='late-night-flex'>
                    <div className='late-night-bullets'><FiChevronRight /></div>
                    <p>Guests make payment immediately, no cancellation.</p>
                </div>
                <div className='late-night-flex'>
                    <div className='late-night-bullets'><FiChevronRight /></div>
                    <p>TheTravelHunters take 7% from the deal.</p>
                </div>
                <div className='late-night-flex'>
                    <div className='late-night-bullets'><FiChevronRight /></div>
                    <p>Deal goes live everyday by 8:30pm local time on our website.</p>
                </div>
                <div className='late-night-flex night-warning'>
                    <div className='late-night-bullets night-warning-bullet'></div>
                    <p>Automate late night deals <span>*Select days in calender</span></p>
                </div>
            </div>

            <h2 className='property-header'>Additional deals on this room type</h2>
            <div className='counter-box'>
                <form className='flex-form'>
                    <div>
                        <input type='checkbox' name='deals' value='free-breakfast' id='free-breakfast' />
                        <label htmlFor='free-breakfast'>Free breakfast</label>
                    </div>
                    <div>
                        <input type='checkbox' name='deals' value='amenities' id='amenities' />
                        <label htmlFor='amenities'>Access to exclusive amenities e.g free spa.</label>
                    </div>
                    <div>
                        <input type='checkbox' name='deals' value='free-dinner' id='free-dinner' />
                        <label htmlFor='free-dinner'>Free dinner</label>
                    </div>
                    <div>
                        <input type='checkbox' name='deals' value='free-lunch' id='free-lunch' />
                        <label htmlFor='free-lunch'>Free lunch</label>
                    </div>
                    <div>
                        <div className='checkbox-btn'>+</div>
                        <div>Add more</div>
                    </div>
                </form>
            </div>

            <h2 className='property-header'>Room amenities</h2>
            <div className='counter-box'>
                <form className='flex-form'>
                    <div>
                        <input type='checkbox' name='deals' value='climate-control' id='climate-control' />
                        <label htmlFor='climate-control'>Climate control; fan, AC</label>
                    </div>

                    <div>
                        <input type='checkbox' name='deals' value='bathroom' id='bathroom' />
                        <label htmlFor='bathroom'>Bathroom; shower, bathtub, bidet, dryer etc</label>
                    </div>

                    <div>
                        <input type='checkbox' name='deals' value='refreshment' id='refreshment' />
                        <label htmlFor='refreshment'>In-room refreshment</label>
                    </div>
                    <div>
                        <div className='checkbox-btn'>+</div>
                        <div>Add more</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
